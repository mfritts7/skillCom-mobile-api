using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SkillCom_Mobile_Api.Migrations
{
    public partial class _2ndMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Phone_PhonePlan_PhonePlanId",
                table: "Phone");

            migrationBuilder.DropForeignKey(
                name: "FK_PhonePlan_Person_PersonId",
                table: "PhonePlan");

            migrationBuilder.AlterColumn<int>(
                name: "PersonId",
                table: "PhonePlan",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "PhonePlanId",
                table: "Phone",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Phone_PhonePlan_PhonePlanId",
                table: "Phone",
                column: "PhonePlanId",
                principalTable: "PhonePlan",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PhonePlan_Person_PersonId",
                table: "PhonePlan",
                column: "PersonId",
                principalTable: "Person",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Phone_PhonePlan_PhonePlanId",
                table: "Phone");

            migrationBuilder.DropForeignKey(
                name: "FK_PhonePlan_Person_PersonId",
                table: "PhonePlan");

            migrationBuilder.AlterColumn<int>(
                name: "PersonId",
                table: "PhonePlan",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "PhonePlanId",
                table: "Phone",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Phone_PhonePlan_PhonePlanId",
                table: "Phone",
                column: "PhonePlanId",
                principalTable: "PhonePlan",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_PhonePlan_Person_PersonId",
                table: "PhonePlan",
                column: "PersonId",
                principalTable: "Person",
                principalColumn: "Id");
        }
    }
}
