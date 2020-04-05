<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\ContactMeEmail;

class ContactMeController extends Controller
{
    public function contact(Request $request)
    {
        $validation = $request->validate([
            'contactName' => 'required|min:2|max:50',
            'email' => 'required|email:rfc,dns',

        ]);

        

        $data = $request->all();

        
        Mail::to('thai@thaiqnguyen.com')->send(new ContactMeEmail($data));

        if(Mail::failures())
        {
            return response()->json(['message' => 'Sorry! your message has not been sent.'],500);
        }
        else 
        {
            return response()->json(['message' => 'Your message has been sent!'], 200);
        }
        return response()->json(['message' => 'got it']);


    }
}
