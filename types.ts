export type ProviderProps = {
  id: string;
  name: string;
  type: string;
  signInUrl?: string;
  callbackUrl: string;
  signInUrlParams?: Record<string, string> | null;
};

export type ProvidersProps = Record<string, ProviderProps>;

export interface DropdownLinksConfigProps {
  title: string;
  href: string;
}
