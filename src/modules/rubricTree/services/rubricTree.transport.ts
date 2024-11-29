import { IRubricTreeTypes } from "@/shared/types.ts";

export const getRubricTreeFetch = async (
  allowEmpty?: string,
): Promise<IRubricTreeTypes[]> => {
  try {
    const res = await fetch(
      `https://www.klerk.ru/yindex.php/v3/event/rubrics${allowEmpty}`,
    );

    const data: IRubricTreeTypes[] = await res.json();

    return data;
  } catch (e) {
    throw e;
  }
};
