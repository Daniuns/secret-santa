/*
  Warnings:

  - You are about to drop the column `userId` on the `UserGroup` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userEmail]` on the table `UserGroup` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `UserGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `UserGroup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserGroup" DROP CONSTRAINT "UserGroup_userId_fkey";

-- DropIndex
DROP INDEX "UserGroup_userId_key";

-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "sorted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "UserGroup" DROP COLUMN "userId",
ADD COLUMN     "userEmail" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserGroup_userEmail_key" ON "UserGroup"("userEmail");
