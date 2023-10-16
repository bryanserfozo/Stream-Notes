package com.revature.multithreading.producerconsumer;

public class Holder {
	
	int contents = 0; // one thread will produce a number and it will increase the value from 0 to 10
	private boolean isAvailable = false;
	
	// This class will hold all of the values generated by another thread
	
	// Let's create a method setVal() which the producer will call on this object
	// Let's create a method getVal() which the consumer will call on this object
	
	public synchronized void setVal(int val) {
		
		// while isAvailable == true
		while(isAvailable) {
			
			// this method will be called by the producer
			
			try {
				wait();
				// This method forces the current thread to wait until some other thread invokes
				// Notify() or notifyAll() on the same object
				// this toggles an object's monitor
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
		}
		
		
		// if !isAvailble
		contents = val;
		isAvailable = true;
		
		notifyAll();
		
	}
	
	
public synchronized int getVal() {
		
		// while isAvailable == true
		while(!isAvailable) {
			
			// this method will be called by the Consumer
			
			try {
				wait();
				// This method forces the current thread to wait until some other thread invokes
				// Notify() or notifyAll() on the same object
				// this toggles an object's monitor
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
		}
		
		
		
		
		isAvailable = false;
		
		notifyAll();
		
		return contents;
	}

}