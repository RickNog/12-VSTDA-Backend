using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VSTDA.Models
{
    public class Todo
    {
        // Primary key
        public int TodoId { get; set; }

        // Additional columns
        public string Text { get; set; }
        public string Priority { get; set; }


    }
}