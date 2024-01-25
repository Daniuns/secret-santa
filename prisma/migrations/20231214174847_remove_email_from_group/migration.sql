/*
  Warnings:

  - You are about to drop the column `email` on the `Group` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Group_email_key";

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "email";
