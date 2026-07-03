import Image from "next/image";

const identityIconSrc = {
  access: "/images/icons-for-identity/key-security.svg",
  audit: "/images/icons-for-identity/security-eye_hires.png",
  config: "/images/icons-for-identity/security-configuration_hires.png",
  document: "/images/icons-for-identity/web-shield_hires.png",
  identity: "/images/icons-for-identity/user-shield_hires.png",
  integration: "/images/icons-for-identity/application-shield_hires.png",
  lock: "/images/icons-for-identity/private-lock.svg",
  operations: "/images/icons-for-identity/security-checked_hires.png",
  organization: "/images/icons-for-identity/microsoft-admin_hires.png",
  payment: "/images/icons-for-identity/shield-with-a-dollar-sign_hires.png",
  policy: "/images/icons-for-identity/restriction-shield_hires.png",
  session: "/images/icons-for-identity/security-time_hires.png",
  shield: "/images/icons-for-identity/security-shield-green_hires.png",
  store: "/images/icons-for-identity/secured-by-alarm-system.svg",
  workspace: "/images/icons-for-identity/smart-home-shield.svg",
} as const;

export type IdentityIconName = keyof typeof identityIconSrc;

type IdentityIconProps = {
  name: IdentityIconName;
  className?: string;
  size?: number;
};

export default function IdentityIcon({ name, className, size = 32 }: IdentityIconProps) {
  return (
    <Image
      src={identityIconSrc[name]}
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden
    />
  );
}
