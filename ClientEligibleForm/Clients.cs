using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClientEligibleForm
{
    public class Clients
    {
        public string LoanId { get; set; }
        public string borrowername { get; set; }
        public string address1 { get; set; }
        public string address2 { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }
        public DateTime loanclosedate { get; set; }
       

    }
}