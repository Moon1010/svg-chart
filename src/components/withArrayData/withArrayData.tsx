import React from "react";

type WithArrayDataProps = {
  data: number[] | string;
};

export function withArrayData<T extends WithArrayDataProps>(
  Component: React.ComponentType<T>
): React.FC<Omit<T, keyof WithArrayDataProps> & WithArrayDataProps> {
  return function NewComponent(
    props: Omit<T, keyof WithArrayDataProps> & WithArrayDataProps
  ) {
    const { data, ...rest } = props;
    const arrayData = React.useMemo(() => {
      if (typeof data == "string") {
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
