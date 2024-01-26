-- AlterTable
ALTER TABLE "Group" ALTER COLUMN "deletedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "deletedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserGroup" ALTER COLUMN "deletedAt" DROP NOT NULL;
