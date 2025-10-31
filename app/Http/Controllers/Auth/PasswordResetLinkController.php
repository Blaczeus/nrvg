<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;

class PasswordResetLinkController extends Controller
{
    /**
     * Display the password reset link request view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/ForgotPassword', [
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'identifier' => 'required|string',
        ]);

        $identifier = trim($request->input('identifier'));

        // Detect if Input is an email or a phone number
        $isEmail = filter_var($identifier, FILTER_VALIDATE_EMAIL);
        $isPhone = !$isEmail && preg_match('/^\+?\d{7,15}$/', $identifier);

        if (! $isEmail && ! $isPhone) {
            throw ValidationException::withMessages([
                'identifier' => ['Please enter a valid email address or phone number.'],
            ]);
        }

        // Email reset 
        if ($isEmail) {
            $status = Password::sendResetLink(['email' => $identifier]);

            if ($status === Password::RESET_LINK_SENT) {
                return back()->with('status', __($status));
            }

            throw ValidationException::withMessages([
                'identifier' => [trans($status)],
            ]);
        }

        // Phone reset (for future SMS integration) ---
        if ($isPhone) {
            // Check if this phone exists in the users table
            $user = User::where('phone', $identifier)->first();

            if (! $user) {
                throw ValidationException::withMessages([
                    'identifier' => ['We could not find a user with that phone number.'],
                ]);
            }

            // To trigger an SMS reset token flow later.
            return back()->with(
                'status',
                'A password reset link will be sent to your phone once SMS support is enabled.'
            );
        }

        // Fallback (shouldn’t be reached)
        throw ValidationException::withMessages([
            'identifier' => ['Unexpected input. Please try again.'],
        ]);
    }
}
