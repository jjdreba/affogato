<?php

use App\Models\User;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

it('renders the create blog page for authenticated users', function (): void {
    $this->actingAs(User::factory()->create());

    $response = $this->get('/blogs/create');

    $response->assertSuccessful();
});


