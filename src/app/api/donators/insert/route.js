import { NextRequest, NextResponse } from "next/server";
import { add_donators } from "./logic/user";


export async function POST(request) 
{
    try
    {

        // For Adding a Single Product
        const data = await request.json();    
        const add_result = await add_donators(data); 
        if(add_result.returncode==0)
        {
            
            return NextResponse
            .json(
                {
                    'returncode': 0,
                    'message': add_result.message,
                    'output': add_result.output
                },
                {
                    status: 200,
                });
        
        }
        else
        {
            return NextResponse
            .json(
                {
                    'returncode': add_result.returncode,
                    'message': add_result.message,
                    'output': add_result.output
                },
                {
                    status: add_result.returncode,
                });
        
        }
    
    }
    catch (error) 
    {
        return NextResponse.json(
            {
                'returncode': 400,
                'message': error.message,
                'output': []
            },
            {
                status: 400,
            });
    }
}