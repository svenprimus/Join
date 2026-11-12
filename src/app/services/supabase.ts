import { Service } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Service()
export class SupabaseService {
    supabaseUrl = 'https://wdfvpfxwppggrdlzfanz.supabase.co';
    supabaseKey = 'sb_publishable_stTg7e6nLWbJXhfVP8JIUw_I0ZxzNe4';

    /**
     * Supabase client.
     */
    supabase = createClient(this.supabaseUrl, this.supabaseKey);

    /**
     * Temporary session client used for sign-up.
     */
    signUp = createClient(this.supabaseUrl, this.supabaseKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
            detectSessionInUrl: false,
            storageKey: 'supabase-signup-auth',
        },
    });
}
