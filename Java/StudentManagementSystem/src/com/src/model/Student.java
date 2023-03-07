/* This is a business logic class unlike main
 * This can be used only to compile and this can't be executed like main
 * We have use a new package name com.src.model
 * 
 * Variables --> 
 * 		--> Properties defined and tend to change in class
 * 		--> Types of variables:
 * 			1. Class or static variable: 
 * 					- When variable is same for every object then it can be declared as static.
 * 					- Variable share the same memory
 * 			2. Instance or non-static variable: 
 * 					- Variables that keeps changing overtime or different for each object like 'student_id' should be declared as instance variable.
 * 					- This can be only accessed with the object (his or her id).
 * 					- Variables don't share the same memory.
 * 			3. Local variable
 * 
 * */

package com.src.model;

// Business logic class
// Always prefer writing class name with capital letters
public class Student 
{
	public int stdid; // Instance/ non-static Variable
	public String stdname; // Instance/ non-static Variable
	public long stdmob; // Int range is not enough for 10 numbers so we used long and non-static
	public int m1, m2, m3; // Instance/ non-static Variable, 
	public int studenttotalmarks; // Instance/ non-static Variable
	public static int noofstudents; // Static Variable
	public	double stdaverage; // Non-Static
	// Whenever you want this package to be accessed ensure to make it public
	public final static int noofsubjects = 3; // We used final so that this wouldn't be changing anywhere

// We can create a method to display and call it in main file
	public void display()
	{
	System.out.println("Student [stdid=" + stdid + ", stdname=" + stdname + ", stdmob=" + stdmob + ", m1=" + m1 + ", m2=" + m2
			+ ", m3=" + m3 + ", studenttotalmarks=" + studenttotalmarks + ", stdaverage=" + stdaverage + "]");
	}

// Start the method with small letter and then the next word should be starting with capital
// Automating the total marks calculation
	public int calcTotalMarks() // Camlin case 
	{
		return m1+m2+m3;
	}

// Incrementing the value of student
	public static void incStudent()  // we are not returning anything
	{
		noofstudents++;
	}
	public double findAverage()
	{
		return studenttotalmarks/noofsubjects;
	}

	
}

/* Hiding the unnecessary data and providing the necessary data to go on with the operation is called data encapsulation
 * Putting all the public, private and protected properties into the same class is called data encapsulation.
 */

