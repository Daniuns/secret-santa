/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `UserGroup` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "UserGroup_groupId_key";

-- DropIndex
DROP INDEX "UserGroup_userEmail_key";

-- CreateIndex
CREATE UNIQUE INDEX "UserGroup_id_key" ON "UserGroup"("id");
