-- AlterTable
ALTER TABLE "Group" ALTER COLUMN "deletedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "deletedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "UserGroup" ALTER COLUMN "deletedAt" DROP DEFAULT;
