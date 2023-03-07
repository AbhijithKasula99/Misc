package com.src.main;
import java.util.Scanner;

import com.src.model.Student; 
public class StudentMGMTSystem {

	Scanner sc = new Scanner(System.in); // User enters the value
// We are declaring this outside because as we don't want it to be within the local main file	
	public static void main(String[] args) 
	{
		StudentMGMTSystem sm = new StudentMGMTSystem(); // Variable for calling the method
		System.out.println("Welcome to the Student Management System!");
		
		
		int choice = 0;
		do // This loop should run as long as the option is not 6
		{	
		System.out.println("Select the option: ");
		System.out.println("1. Add Student");
		System.out.println("2. Delete Student");
		System.out.println("3. Update Student");
		System.out.println("4. Student Details");
		System.out.println("5. Total number of students");
		System.out.println("6. Exit"); // We need this menu card to re-occur so we use control statements
		
		choice = sm.sc.nextInt(); // The value entered by user is stored in choice 
		// As sc is outside we need to call it
		
				// Each choice has a fixed task so we use switch block to make our work easy. 
				switch(choice)
				{
				   case 1:
				   {
					 sm.addStudent();
					 break;
				   }
				   
				}
			
		} while(choice != 6);
			 
	}
	// To reduce the work we are calling a method for data entry
		public void addStudent()
		{
			Student s1 = new Student();
			System.out.println("Enter Student id: "); //001
			s1.stdid = sc.nextInt(); // Whatever string is given by user must be converted to integer so we use nextInt
			System.out.println("Enter Student Name: "); 
			s1.stdname = sc.next(); // String must remain a string so just use next
			System.out.println("Enter mobile number: ");
			s1.stdmob = sc.nextLong(); // String must be converted to long
			System.out.println("Enter M1 marks: ");
			s1.m1 = sc.nextInt();
			System.out.println("Enter M2 marks: ");
			s1.m2 = sc.nextInt();
			System.out.println("Enter M3 marks ");
			s1.m3 = sc.nextInt();
			// All the data has been taken now calculation of total and average needs to be done so
			s1.studenttotalmarks = s1.calcTotalMarks();
			s1.stdaverage = s1.findAverage(); // Average calculation
			Student.incStudent(); // Incrementing the no of students
			s1.display();
		}

}

// We chose do while because we need to execute the menu card and then ask for choice

/* 
 * CONTROL STATEMENTS
 *  	A. Decision Statements
 * 1. if(condition)..
 * 2. if(condition)..else..
 * 3. if(condition)..else if(condition)...else
 * 4. nested if(condition)..else..
 * 5. Switch 
 * 
 * 		B. Loop Statements
 * 1. While(Condition)..
 * 2. do..while(condition)...
 * 3. for(initialization;condition;iteration)....
 * 4. foreach()
 * 
 * 		C. JUMP Statements
 * 1. break
 * 2. continue
 * */
