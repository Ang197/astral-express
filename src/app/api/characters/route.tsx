import Database from "better-sqlite3";
import { NextResponse } from 'next/server'
let db: Database.Database | null = null;


export async function GET(): Promise<NextResponse> 
    {
        if (!db)
            {
                db = new Database('./collection.db');
            }
        
            const stmt = db.prepare('SELECT * FROM items');
            const item = stmt.all();

            return NextResponse.json(item, {
                headers: { 
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                status: 200,
            });
    }