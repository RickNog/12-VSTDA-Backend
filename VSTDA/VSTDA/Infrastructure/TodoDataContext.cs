using System.Data.Entity;
using VSTDA.Models;

namespace VSTDA.Infrastructure
{
    public class TodoDataContext : DbContext
    {
        public TodoDataContext() : base("Todo")
        {

        }

        

        public System.Data.Entity.DbSet<VSTDA.Models.Todo> Todoes { get; set; }
    }
}