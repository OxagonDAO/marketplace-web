import type { NextRequest } from 'next/server'
import { NextResponse } from "next/server";
/* import { withAuth } from "next-auth/middleware"; */
/* import { hasCookie } from "cookies-next"; */
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18n.config';

const appRoute = /\/dashboard(\/.*)?/;
const registerRoute = /\/register(\/.*)?/;
const recoveryRoute = /\/recovery(\/.*)?/;
const loginRoute = /\/login(\/.*)?/;
const onboardingRoute = /\/onboarding(\/.*)?/;
const accountRoute = /\/account(\/.*)?/;
const balanceRoute = /\/balance(\/.*)?/;

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};

/* export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}; */