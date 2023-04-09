-- CreateTable
CREATE TABLE "Account" (
    "uid" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "is_tutor" BOOLEAN NOT NULL,
    "phone_number" TEXT NOT NULL,
    "Subject" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("uid")
);
