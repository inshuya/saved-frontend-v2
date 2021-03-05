import React from 'react';
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";

export const NavbarData = [
    {
        title: 'Accounts',
        path: '/home/accounts',
        icon: <GiIcons.GiBank />,
        cName: 'nav-text'
    },
    {
        title: 'Budget',
        path: '/home/goals',
        icon: <GiIcons.GiStairsGoal />,
        cName: 'nav-text'
    },
    {
        title: 'Bills and Income',
        path: '/home/transactions',
        icon: <GiIcons.GiTakeMyMoney />,
        cName: 'nav-text'
    },
    {
        title: 'Spending Tracker',
        path: '/home/expense',
        icon: <GiIcons.GiExpense />,
        cName: 'nav-text'
    },
    {
        title: 'Expense Stats',
        path: '/home/savings',
        icon: <BiIcons.BiStats />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/sign-in',
        icon: <BiIcons.BiLogOut />,
        cName: 'nav-text'
    }
]