package com.bofa;

import com.bofa.dao.CrimeDAO;
import com.bofa.dao.SuperPrisonDAO;
import com.bofa.dao.SuperVillainDAO;
import com.bofa.models.Crime;
import com.bofa.models.SuperPrison;
import com.bofa.models.SuperVillain;

import java.util.ArrayList;
import java.util.List;

public class Driver {

    static CrimeDAO cdao = new CrimeDAO();

    public static void main(String[] args) {
        System.out.println("Running our Hibernate Demo ");

        Crime c1 = new Crime("Freeze", "covering the city in ice");
        Crime c2 = new Crime("Time Manipulation", "freezing time, robbin' banks");
        Crime c3 = new Crime("Arson", "setting the city ablaze");

        // as of now make sure you're only mapping the Crime model, not the others because we haven't created them
        cdao.insert(c1);
        cdao.insert(c2);
        cdao.insert(c3);

        List<Crime> crimes = new ArrayList<Crime>();
        crimes.add(c1);
        crimes.add(c3);

        SuperPrison arkham = new SuperPrison("Arkham Asylum", "Gotham City");

        SuperVillain joker = new SuperVillain("The Joker", "evilness", 1_000_000.00, crimes, arkham);

        // add the joker and arkham to the DB

        SuperPrisonDAO spdao = new SuperPrisonDAO();
        spdao.insert(arkham);


        SuperVillainDAO svdao = new SuperVillainDAO();
        svdao.insert(joker);

        System.out.println(svdao.selectAll());

    }

}
