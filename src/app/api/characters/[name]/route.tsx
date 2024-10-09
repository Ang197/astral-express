import Database from "better-sqlite3";
import { NextRequest, NextResponse } from 'next/server'
let db: Database.Database | null = null;


export async function GET(req: NextRequest): Promise<NextResponse> 
    {
        // Grabs the name at the end of the url
        const name = req.url.split("/").pop()?.toLowerCase();
        console.log(name);
        if (!db)
            {
                db = new Database('./collection.db');
            }
        
            const item = db.prepare('SELECT * FROM items WHERE name = ?').get(name);

            return NextResponse.json(item, {
                headers: { "Content-Type": "application/json", },
                status: 200,
            });
    }