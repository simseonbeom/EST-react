import type { AppRoute } from "@/@types/global";

// navigation 배열을 받아서 path와 text만 뽑아냄
export function getNavigationItems(navigation: AppRoute[]) {
  const filtered = navigation.filter((item) => item.display === undefined);

  const navigationItems = filtered.map(({ path, text }) => ({
    path,
    text,
  }));

  return navigationItems;
}

