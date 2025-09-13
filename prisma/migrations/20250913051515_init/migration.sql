-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "link" TEXT,
    "location" TEXT,
    "dateApplied" DATETIME NOT NULL,
    "stage" TEXT NOT NULL DEFAULT 'APPLIED',
    "notes" TEXT,
    "nextFollowUp" DATETIME,
    "lastUpdated" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
