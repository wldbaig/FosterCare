using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace AIFosterCare.Common
{
    public class AppConstants
    {
        public struct Configuration
        {
            public static readonly string CompanyName = ConfigurationManager.AppSettings["CompanyName"];
            public static readonly string AppHostPrefix = ConfigurationManager.AppSettings["AppHostPrefix"]; 

            public static readonly string HostAddress = ConfigurationManager.AppSettings["FC.Host.Address"];
        }

        public struct Constant
        {
            public const string EncryptionDecryptionKey = "89343EA2-368C-4ABB-90DE-039BE336D2DD"; 
        }

    }
}