-- CreateEnum
CREATE TYPE "ClaimStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "Claim" ADD COLUMN     "status" "ClaimStatus" NOT NULL DEFAULT 'PENDING';
