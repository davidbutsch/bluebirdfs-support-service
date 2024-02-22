process.title = "microservice-template";
Error.stackTraceLimit = process.env.NODE_ENV === "production" ? -1 : 10;

import "module-alias/register";
import "reflect-metadata";
import "./handleExit";

import * as libs from "@/libs";

import { env } from "@/common";
import { initializeWorkers } from "./queue";

libs.Logger.info(
  `microservice-template with process id of ${process.pid} starting in ${env.NODE_ENV} mode`
);

initializeWorkers();
