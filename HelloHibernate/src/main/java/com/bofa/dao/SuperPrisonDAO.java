package com.bofa.dao;

import com.bofa.models.SuperPrison;
import com.bofa.util.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class SuperPrisonDAO {

    public int insert(SuperPrison sp) {

        Session ses = HibernateUtil.getSession();
        Transaction tx = ses.beginTransaction();

        int pk = (int) ses.save(sp);

        tx.commit();

        return pk;

    }

    // select By id
    public SuperPrison selectById(int id) {

        // we don't need a transaction since we're just querying data from the db
        Session ses = HibernateUtil.getSession();

        // session method - we are invoking a simple query to return an object of type SuperPrison with the PK that we specify from the SuperPrison table
        SuperPrison sp = ses.get(SuperPrison.class, id);

        return sp;
    }

    // selectAll()

}
