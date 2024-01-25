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
    <Card isPressable className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md text-left">{data.name}</p>
          <p className="text-small text-default-500 self-start">
            Criado em: {format("MMM yyyy", data.updatedAt)}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardFooter>
        <Link color="foreground" href={`grupos/${data.id}`}>
          Acessar
        </Link>
      </CardFooter>
    </Card>
  );
}
