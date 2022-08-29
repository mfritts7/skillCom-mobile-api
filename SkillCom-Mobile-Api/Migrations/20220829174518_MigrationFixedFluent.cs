using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SkillCom_Mobile_Api.Migrations
{
    public partial class MigrationFixedFluent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Minutes",
                table: "PhonePlan",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "PlanName",
                table: "PhonePlan",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Minutes",
                table: "PhonePlan");

            migrationBuilder.DropColumn(
                name: "PlanName",
                table: "PhonePlan");
        }
    }
}
