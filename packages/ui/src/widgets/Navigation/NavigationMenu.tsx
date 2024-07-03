import { useListData } from 'react-stately';
import { NavigationProps } from './Navigation.types';
import { Tabs, TabList, Tab } from 'react-aria-components';
import { useTreeFlatten } from '@do-ob/ui/hooks';

export function NavigationMenu({
  base,
}: { base: NavigationProps }) {

  const {
    links = [],
  } = base;

  const linksFlat = useTreeFlatten(
    links,
    (item) => item.links,
  );

  const linkList = useListData({
    initialItems: linksFlat,
    getKey: (item) => item.url,
  });

  console.log({
    linksFlat,
    linkList: linkList.items
  });

  return (
    <Tabs
      orientation="vertical"
      keyboardActivation="manual"
    >
      <TabList
        items={linkList.items}
      >
        {(link) => (
          <Tab id={link.url}>{link.title}</Tab>
        )}
      </TabList>
    </Tabs>
  );
}
