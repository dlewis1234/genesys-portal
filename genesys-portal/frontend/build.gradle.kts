import com.github.gradle.node.yarn.task.YarnTask

plugins {
	id("com.github.node-gradle.node") version "5.0.0"
}

node {
	download.set(true)
	version.set("18.12.1")
}

tasks.register<YarnTask>("appYarnBuild") {
    description = "Builds project"
    yarnCommand.set(listOf("run", "build"))
}