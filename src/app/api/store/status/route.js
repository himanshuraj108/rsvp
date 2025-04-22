import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import connectDB from '@/lib/mongodb';
import StoreStatus from '@/models/StoreStatus';

// GET store status
export async function GET() {
  try {
    await connectDB();
    
    // Get the most recent status entry, or create default one if none exists
    let status = await StoreStatus.findOne().sort({ lastUpdated: -1 });
    
    if (!status) {
      status = {
        isOnline: false,
        lastUpdated: new Date()
      };
    }
    
    return NextResponse.json({ isOnline: status.isOnline, lastUpdated: status.lastUpdated });
  } catch (error) {
    console.error('Error getting store status:', error);
    return NextResponse.json(
      { message: 'Failed to get store status', error: error.message },
      { status: 500 }
    );
  }
}

// PUT update store status
export async function PUT(request) {
  try {
    const session = await auth();
    
    // Only admin can update store status
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json(
        { message: 'Not authorized' },
        { status: 403 }
      );
    }
    
    const { isOnline } = await request.json();
    
    if (typeof isOnline !== 'boolean') {
      return NextResponse.json(
        { message: 'Invalid status value. Must be boolean.' },
        { status: 400 }
      );
    }
    
    await connectDB();
    
    // Create a new status entry
    const newStatus = new StoreStatus({
      isOnline,
      updatedBy: session.user.id,
      lastUpdated: new Date()
    });
    
    await newStatus.save();
    
    return NextResponse.json({ 
      message: `Store is now ${isOnline ? 'online' : 'offline'}`,
      isOnline,
      lastUpdated: newStatus.lastUpdated
    });
  } catch (error) {
    console.error('Error updating store status:', error);
    return NextResponse.json(
      { message: 'Failed to update store status', error: error.message },
      { status: 500 }
    );
  }
} 