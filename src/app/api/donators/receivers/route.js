import { NextRequest, NextResponse } from "next/server";
import { get_receivers } from "./logic/user";

export async function GET() 
{
    try
    {
        const result = await get_receivers(); 
        if(result.returncode==0)
        {
            
            return NextResponse
            .json(
                {
                    'returncode': 0,
                    'message': 'Data Fetched',
                    'output': result.output
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
                    'returncode': result.returncode,
                    'message': result.message,
                    'output': result.output
                },
                {
                    status: result.returncode,
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