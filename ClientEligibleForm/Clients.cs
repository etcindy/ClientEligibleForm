using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClientEligibleForm
{
    public class Clients
    {
        public string LoanId { get; set; }
        public string LastName { get; set; }
        public string Borrowername { get; set; }
        public string HomePhoneNumber { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string Zip { get; set; }
        public string State { get; set; }
        public DateTime LoanCloseDate { get; set; }
        public string Mortgage_Lender { get; set; }
        public string Company { get; set; }
       

    }
}