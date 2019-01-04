import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        children: [
            {
                id: 'registration',
                title: 'Registration',
                translate: 'NAV.Registration.TITLE',
                type: 'item',
                icon: 'keyboard_tab',
                url: '/registration',
                badge: {
                    title: '25',
                    translate: 'NAV.Registration.BADGE',
                    bg: '#EC0C8E',
                    fg: '#FFFFFF'
                }
            },
            {
                id: 'masters',
                title: 'Masters',
                translate: 'NAV.Masters.TITLE',
                type: 'item',
                icon: 'inbox',
                url: '/home',
                badge: {
                    title: '25',
                    translate: 'NAV.Masters.BADGE',
                    bg: '#09d261',
                    fg: '#FFFFFF'
                }
            },
            {
                id: 'workflow',
                title: 'Workflow',
                translate: 'NAV.Workflow.TITLE',
                type: 'collapsable',
                icon: 'call_split',
                children: [
                    {
                        id: 'workflowlist',
                        title: 'Workflows',
                        type: 'item',
                        url: '/apps/workflow/list'
                    }
                ]
            },
            {
                id: 'office',
                title: 'Office',
                translate: 'NAV.Office.TITLE',
                type: 'collapsable',
                icon: 'domain',
                children: [
                    {
                        id: 'officelist',
                        title: 'Office',
                        type: 'item',
                        url: '/apps/office/list'
                    },
                    {
                        id: 'subofficelist',
                        title: 'Sub-Office',
                        type: 'item',
                        url: '/apps/suboffice/list'
                    },
                    {
                        id: 'officereporting',
                        title: 'Office Reporting',
                        type: 'item',
                        url: '/apps/office/reporting'
                    }
                ]
            },
            {
                id: 'role',
                title: 'Role',
                translate: 'NAV.Role.TITLE',
                type: 'item',
                icon: 'offline_bolt',
                url: '/apps/role'
            },
            {
                id: 'employee',
                title: 'Employee',
                translate: 'NAV.Employee.TITLE',
                type: 'item',
                icon: 'people',
                url: '/apps/employee'
            },
            {
                id: 'product',
                title: 'Product',
                translate: 'NAV.Product.TITLE',
                type: 'item',
                icon: 'select_all',
                url: '/apps/product'
            },
            {
                id: 'member',
                title: 'Member',
                translate: 'NAV.Member.TITLE',
                type: 'item',
                icon: 'person_outline',
                url: '/apps/member'
            },
            {
                id: 'loan',
                title: 'Loan',
                translate: 'NAV.Loan.TITLE',
                type: 'collapsable',
                icon: 'attach_money',
                children: [
                    {
                        id: 'loanapply',
                        title: 'Loan Apply',
                        type: 'item',
                        url: '/apps/loan/apply'
                    },
                    {
                        id: 'loanapprove',
                        title: 'Loan Approve',
                        type: 'item',
                        url: '/apps/loan/approve'
                    },
                    {
                        id: 'loandisburse',
                        title: 'Loan Disburse',
                        type: 'item',
                        url: '/apps/loan/disburse'
                    },
                    {
                        id: 'loanpreclose',
                        title: 'Loan Preclose',
                        type: 'item',
                        url: '/apps/loan/preclose'
                    },
                    {
                        id: 'loanwaiver',
                        title: 'Loan Waiver',
                        type: 'item',
                        url: '/apps/loan/waive'
                    },
                    {
                        id: 'loanwriteoff',
                        title: 'Loan WriteOff',
                        type: 'item',
                        url: '/apps/loan/writeoff'
                    }
                ]
            },
            {
                id: 'collection',
                title: 'Collection',
                translate: 'NAV.Collection.TITLE',
                type: 'collapsable',
                icon: 'money',
                children: [
                    {
                        id: 'collectionapply',
                        title: 'Collection Apply',
                        type: 'item',
                        url: '/apps/collection/apply'
                    },
                    {
                        id: 'collectionapprove',
                        title: 'Collection Approve',
                        type: 'item',
                        url: '/apps/collection/approve'
                    },
                    {
                        id: 'collectionprint',
                        title: 'Collection Print',
                        type: 'item',
                        url: '/apps/collection/print'
                    }
                ]
            },
            {
                id: 'transfer',
                title: 'Transfer',
                translate: 'NAV.Transfer.TITLE',
                type: 'collapsable',
                icon: 'local_airport',
                children: [
                    {
                        id: 'centertfr',
                        title: 'Center Transfer',
                        type: 'item',
                        url: '/apps/transfer/center'
                    },
                    {
                        id: 'employeetfr',
                        title: 'Employee Transfer',
                        type: 'item',
                        url: '/apps/transfer/employee'
                    },
                    {
                        id: 'membertrf',
                        title: 'Member Transfer',
                        type: 'item',
                        url: '/apps/transfer/member'
                    },
                    {
                        id: 'meetingtrf',
                        title: 'Meeting Transfer',
                        type: 'item',
                        url: '/apps/transfer/meeting'
                    }
                ]
            },
            {
                id: 'utility',
                title: 'Utility',
                translate: 'NAV.Utility.TITLE',
                type: 'collapsable',
                icon: 'extension',
                children: [
                    {
                        id: 'loginreset',
                        title: 'Login Reset',
                        type: 'item',
                        url: '/apps/utility/loginreset'
                    },
                    {
                        id: 'passwordreset',
                        title: 'Password Reset',
                        type: 'item',
                        url: '/apps/utility/passwordreset'
                    },
                    {
                        id: 'changepassword',
                        title: 'Change Password',
                        type: 'item',
                        url: '/apps/utility/changespwd'
                    }
                ]
            },
            {
                id: 'logout',
                title: 'Logout',
                translate: 'NAV.Logout.TITLE',
                type: 'item',
                icon: 'keyboard_return',
                url: '/apps/logout'
            }
        ]
    }
];
