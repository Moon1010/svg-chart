import React from "react";

type WithArrayDataProps = {
  data: number[] | string;
};

export function withArrayData<T extends { data: number[] }>(
  Component: React.ComponentType<T>
): React.FunctionComponent<
  Omit<T, keyof WithArrayDataProps> & WithArrayDataProps
> {
  return function ArrayStringDataComponent(props) {
    const { data, ...rest } = props;
    const arrayData = React.useMemo(() => {
      if (typeof data === "string") {
        if (data) {
          return data.split(",").map(Number);
        } else {
          return [];
        }
      } else {
        return data;
      }
    }, [data]);

    return <Component {...({ ...rest, data: arrayData } as T)} />;
  };
}
