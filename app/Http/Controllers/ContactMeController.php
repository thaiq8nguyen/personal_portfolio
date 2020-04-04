<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\ContactMeEmail;

class ContactMeController extends Controller
{
    public function contact()
    {
        $data = ['message' => 'Hello, how are you?'];

        Mail::to('lightbringeree@gmail.com')->send(new ContactMeEmail($data));

        if(Mail::failures())
        {
            return response()->json(['message' => 'Sorry! Please try again later'],500);
        }
        else 
        {
            return response()->json(['message' => 'Your email has been sent!'], 200);
        }
        //return response()->json(['message' => 'got it']);


    }
}
