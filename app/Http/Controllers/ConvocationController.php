<?php

namespace App\Http\Controllers;

use App\Models\Convocation;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Nette\Utils\Paginator;

class ConvocationController extends Controller
{

    public function index(): LengthAwarePaginator
    {
        return Convocation::paginate(25);
    }

    public function myConvocations() {
        // Get user authenticated
        $user = auth()->user();
        return $user->convocations()->paginate(25);
    }

    /**
     * Return last invitations for member
     *
     * @return void
     */
    public function invitations() {

    }

//    public function invite(Request $request, $id) {
//        $convocation = Convocation::findOrFail($id);
//        $convocation->invitations()->create($request->all());
//        return $convocation;
//    }

//    public function accept(Request $request, $id) {
//        $invitation = ConvocationInvitation::findOrFail($id);
//        $invitation->update(['accepted' => true, 'declined' => false, 'responded_at' => now()]);
//        return $invitation;
//    }
//
//    public function decline(Request $request, $id) {
//        $invitation = ConvocationInvitation::findOrFail($id);
//        $invitation->update(['accepted' => false, 'declined' => true, 'responded_at' => now()]);
//        return $invitation;
//    }

    public function search(Request $request): Paginator
    {
        $search = $request->input('search');
        return Convocation::where('title', 'like', '%' . $search . '%')->paginator(25);
    }

    public function show($id)
    {
        $convocation = Convocation::findOrFail($id);
        $convocation->load('invitations');

        return $convocation;
    }

    public function store(Request $request)
    {
        $convocation = Convocation::create($request->all());
        $invitations = $request->input('invitations');
        foreach ($invitations as $invitation) {
            $convocation->invitations()->create([
                'user_id' => intval($invitation)
            ]);
        }

        return $convocation;
    }

    public function update(Request $request, $id)
    {
        $convocation = Convocation::findOrFail($id);
        $convocation->update($request->all());

        return $convocation;
    }

    public function delete(Request $request, $id)
    {
        $convocation = Convocation::findOrFail($id);
        $convocation->delete();

        return 204;
    }
}
