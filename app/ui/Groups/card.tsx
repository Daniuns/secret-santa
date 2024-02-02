"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import Link from "next/link";
import { groupSchema } from "@/app/schemas/groups";
import { z } from "zod";
import { format } from "date-fns/fp";

export default function CardGroup({ ...data }: z.infer<typeof groupSchema>) {
  return (
    <Card className="max-w-[400px] min-w-[300px] h-max flex flex-col">
      <CardHeader className="flex gap-3 overflow-hidden">
        <div className="flex flex-col flex-1 min-h-[62px] justify-between">
          <p className="text-md text-left line-clamp-2">{data.name}</p>
          <p className="text-small text-default-500 self-start">
            Criado em: {format("MMM yyyy", data.updatedAt)}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <Link color="foreground" href={`grupos/${data.id}`}>
        <CardFooter>Acessar</CardFooter>
      </Link>
    </Card>
  );
}
