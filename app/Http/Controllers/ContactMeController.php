<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
//use App\Mail\ContactMeEmail;

class ContactMeController extends Controller
{
    public function contact()
    {
        $data = ['message' => 'This is a test!']
        // Mail::send(['text' => 'view'], $data, function($message){
        //     $message->from('thai@thaiqnguyen.com','Personal');
        //     $message->to('discoverylight@yahoo.com')
        // })
        return response()->json(['message' => 'got it']);


    }
}
