//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AIFosterCare.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class User
    {
        public int UserId { get; set; }
        public string AspNetUserId { get; set; }
        public string FullName { get; set; }
        public Nullable<System.DateTime> AddedOn { get; set; }
    
        public virtual AspNetUser AspNetUser { get; set; }
    }
}
