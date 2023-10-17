package com.bofa.dao;

import com.bofa.models.Crime;
import com.bofa.util.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class CrimeDAO {

    public void insertWIhtoutCasting(Crime crime) {

        // capture a session
        Session ses = HibernateUtil.getSession();

        // Transaction is uniquely from HIbernate
        Transaction tx = ses.beginTransaction();

        // Make sure that you have java 8 set in your properties in Maven
        // the save() method reutrns the Primary Key
        ses.save(crime);
        tx.commit();

    }

    public int insert(Crime crime) {

        // capture a session
        Session ses = HibernateUtil.getSession();

        // Transaction is uniquely from HIbernate
        Transaction tx = ses.beginTransaction();

        // Make sure that you have java 8 set in your properties in Maven
        int pk = (int) ses.save(crime); // the save() method reutrns the Primary Key

        tx.commit();

        return pk; // we return the generate Primary Key that DB provides for us
    }

}
