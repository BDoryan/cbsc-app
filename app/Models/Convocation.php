<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Convocation extends Model
{
    use HasFactory;

    protected $table = 'convocation_invitations_accepted';

    /**
     * @var string[] $fillable
     */
    protected $fillable = [
        'title',
        'content',
        'datetime',
    ];

    public function invitations(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ConvocationInvitation::class);
    }
}
