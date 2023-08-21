/*
  Warnings:

  - You are about to drop the column `customerId` on the `Claim` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Claim` table. All the data in the column will be lost.
  - Added the required column `reason` to the `Claim` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Claim" DROP CONSTRAINT "Claim_customerId_fkey";

-- AlterTable
ALTER TABLE "Claim" DROP COLUMN "customerId",
DROP COLUMN "type",
ADD COLUMN     "reason" TEXT NOT NULL;
