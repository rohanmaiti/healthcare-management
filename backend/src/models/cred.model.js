import mongoose from "mongoose";

const CredSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
    password: {
       type: String,
      required: [true, "Password is required"],
    },
    userType: {
      type: String,
      required: [true, "User type is required"],
      enum: [
        "user",
        "doctor",
        "hospital-admin",
        "inventory-manager",
        "receptionist",
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Create compound unique index for email + userType combination
CredSchema.index({ email: 1, userType: 1 }, { unique: true });

export const Creds = mongoose.model("Creds", CredSchema);

